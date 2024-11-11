# changeModel

Changes the model of the given unit. Works only with unit.

## Code Information

- **Name**: `changeModel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 57 00`
- **Assembly Address in Memory** : `0x891f8c0`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(int)model_index` *(8 bytes)* : 0 is usually base model. For player, 1 is Event model.

## Remakrs

If the model is the controllable player, [setUnitCtrlEnable](./setunitctrlenable.md) must be called after this.

## Example

Here is one example in hex:

```25 16 57 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
changeModel((int *)iVar0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891f8c0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
    FUN_088b9d44(iVar3,*piVar2 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

