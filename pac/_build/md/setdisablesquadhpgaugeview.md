# setDisableSquadHpgaugeView

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setDisableSquadHpgaugeView`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 97 00`
- **Assembly Address in Memory** : `0x8922490`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 97 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 35 00 00 00```

Which is interpreted as:

```c
setDisableSquadHpgaugeView((int)0, (int *)iVar53)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922490(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1), iVar3 != 0)
      ) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
    *(bool *)(iVar3 + 0x950) = *piVar1 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

