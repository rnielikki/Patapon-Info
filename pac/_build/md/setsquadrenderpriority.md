# setSquadRenderPriority

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setSquadRenderPriority`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3c 00`
- **Assembly Address in Memory** : `0x891d664`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 3c 00 / 04 00 00 00 / 03 00 00 00 / 02 00 00 00 / d2 0f 00 00```

Which is interpreted as:

```c
setSquadRenderPriority((int *)iVar3, (int)4050)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891d664(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  uint *puVar5;
  uint uVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
    puVar5 = *(uint **)(iVar3 + 0x5c);
    if ((puVar5[2] ^ *(uint *)(iVar3 + 0x60) |
        *puVar5 ^ *(uint *)(iVar3 + 0x58) | puVar5[1] ^ *(uint *)(iVar3 + 0x5c)) != 0) {
      uVar6 = puVar5[2];
      while( true ) {
        if ((uVar6 != 0) && (iVar4 = (**(code **)(*(int *)(uVar6 + 4) + 0x34))(uVar6), iVar4 == 9))
        {
          (**(code **)(*(int *)(uVar6 + 0x3c) + 0x14))(uVar6 + 0x20,*puVar2);
        }
        uVar6 = _DAT_00000004;
        if (puVar5 != (uint *)0x0) {
          puVar5 = (uint *)puVar5[1];
          uVar6 = puVar5[1];
        }
        if ((puVar5[2] ^ *(uint *)(iVar3 + 0x60) |
            *puVar5 ^ *(uint *)(iVar3 + 0x58) | uVar6 ^ *(uint *)(iVar3 + 0x5c)) == 0) break;
        uVar6 = puVar5[2];
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

