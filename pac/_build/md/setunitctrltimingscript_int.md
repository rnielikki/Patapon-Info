# setUnitCtrlTimingScript_Int

Calls an script when an unit is killed. Though, [setDeathCall](./setdeathcall.md) is preferred for most cases.

The address tends to start with [getEthnicID](./getethnicid.md) and compare the values.

## Code Information

- **Name**: `setUnitCtrlTimingScript_Int`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 26 00`
- **Assembly Address in Memory** : `0x8b5e360`

## Parameters

- `(int* )generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(MemoryAddress)pac_address` *(8 bytes)* : Memory address that contains start of the PAC, obtained from [getPack](./getpack_25100600.md).
- `(Address)address` *(8 bytes)*: Address to call when the unit is dead.

## Example

Here is one example in hex:

```25 1f 26 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 08 00 00 00 / 5b 00 00 00 / 01 00 00 00 / 0c f6 01 00```

Which is interpreted as:

```c
setUnitCtrlTimingScript_Int(((global)int *)giVar26, (int)0, ((global)int *)giVar91, (index)0x1f60c)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5e360(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  int iVar6;
  undefined4 uVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar6 = *(int *)(param_1 + 0x10);
  if (iVar6 == 0) {
    iVar6 = 0;
  }
  else if (*piVar1 == -1) {
    iVar6 = 0;
  }
  else {
    if (iVar6 == 0) {
      iVar6 = 0;
    }
    iVar6 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar6 + 0x2c8));
    if (iVar6 == 0) {
      iVar6 = 0;
    }
  }
  if (iVar6 != 0) {
    iVar5 = FUN_Mission__08b59d98(iVar6,*piVar2);
    if (iVar5 == 1) {
      iVar5 = *piVar2;
    }
    else {
      if ((iVar5 != 5) && (iVar5 != 2)) goto LAB_Mission__08b5e488;
      iVar5 = *piVar2;
    }
    uVar7 = *puVar4;
    iVar6 = iVar6 + iVar5 * 8;
    *(undefined4 *)(iVar6 + 0x688) = *puVar3;
    *(undefined4 *)(iVar6 + 0x68c) = uVar7;
  }
LAB_Mission__08b5e488:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

