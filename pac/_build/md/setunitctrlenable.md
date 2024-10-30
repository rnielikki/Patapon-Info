# setUnitCtrlEnable

Enables or disables controlling the unit.

## Code Information

- **Name**: `setUnitCtrlEnable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3e 00`
- **Assembly Address in Memory** : `0x891d928`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(bool)can_control` *(8 bytes)* : 0 is disabling the control, and other values enables controlling the unit.

## Example

Here is one example in hex:

```25 16 3e 00 / 04 00 00 00 / 36 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setUnitCtrlEnable((int *)iVar54, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891d928(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) {
    FUN_088f5148(iVar3 + 0x170,*piVar2 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

