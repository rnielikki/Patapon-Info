# setMissionTimmingScript

Callback when the mission is loaded in certain phase.

Called after [getPack](./getpack_25100600.md).

More information in [How To: Define a Mission](./guide/how-to-define-a-mission.md).

## Code Information

- **Name**: `setMissionTimmingScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 12 02 00`
- **Assembly Address in Memory** : `0x8a1d030`

## Parameters

- `(int)phase` *(8 bytes)* : Loading phase, usually 0~2. *Must be smaller than 4*.
   - Phase 0: [Load resources](./readarcfile.md).
   - Phase 1: Create and define entities.
      - Define Items (such as [beginAppearItem](./beginappearitem.md)), Create Entities ([create](./create.md)...)
   - Phase 2: *Late setup*, setup more information of the entities, also loads [stages](./addstage_25165d00.md).
      - Setup some UI flags, [setupUnit](./setupunit.md), [applyUnit](./applyunit.md), [appearance](./setappearanceposition.md)/[reborn](./setrebornposition.md) position etc.
- `(MemoryAddress)pac_address` *(8 bytes)* : Memory address that contains start of the PAC, obtained from [getPack](./getpack_25100600.md).
- `(Address)address` *(8 bytes)*: Address to call when the mission is loaded.

## Example

Here is one example in hex:

```25 12 02 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00 / 01 00 00 00 / f8 00 00 00```

Which is interpreted as:

```c
setMissionTimmingScript((int)0, (int *)iVar0, (index)248)
```

Here is typical `setMissionTimmingScript` usage.

```c
0000008C  25100600:getPack(4:0)
00000098  25120200:setMissionTimmingScript(2:0, 4:0, 1:F0)
000000B4  25120200:setMissionTimmingScript(2:1, 4:0, 1:674)
000000D0  25120200:setMissionTimmingScript(2:2, 4:0, 1:8C4)
000000EC  25000100:cmd_end()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08a1d030(int param_1,undefined4 param_2)

{
  uint *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 uVar4;
  int iVar5;
  undefined4 *puVar6;
  int iVar7;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar7 = *(int *)(param_1 + 0x10);
  iVar5 = iVar7;
  if (iVar7 == 0) {
    iVar5 = 0;
  }
  if (iVar5 != 0) {
    if (iVar7 == 0) {
      iVar7 = 0x380;
    }
    else {
      iVar7 = iVar7 + 0x380;
    }
    if (*puVar1 < 4) {
      puVar6 = (undefined4 *)(iVar7 + *puVar1 * 8);
    }
    else {
      puVar6 = (undefined4 *)0x0;
    }
    uVar4 = *puVar3;
    *puVar6 = *puVar2;
    puVar6[1] = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

