# setActive

Activates an object with given handle. Inactive object is invisible and can't interact.

## Code Information

- **Name**: `setActive`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 06 00`
- **Assembly Address in Memory** : `0x8911070`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [Handle](./guide/how-to-get-a-handle.md).
- `(bool)active` *(8 bytes)* : 1 activates the target, 0 deactivates the target.

## Example

Here is one example in hex:

```25 17 06 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setActive((int *)iVar0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08911070(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  if (iVar3 != 0) {
    (**(code **)(*(int *)(iVar3 + 4) + 0x58))(iVar3,*piVar2 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

