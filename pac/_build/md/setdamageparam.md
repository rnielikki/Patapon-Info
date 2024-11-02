# setDamageParam

Matches stat of an object to the another one. Used for connecting parent stat to the child.

## Code Information

- **Name**: `setDamageParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 44 00`
- **Assembly Address in Memory** : `0x8915a24`

## Parameters

- `(int *)dest_handle_id` *(8 bytes)* : The [handle](./guide/category.md#getting-handle) of the destination stat.
- `(int *)source_handle_id` *(8 bytes)* : The [handle](./guide/category.md#getting-handle) of the source stat.

## Example

Here is one example in hex:

```25 17 44 00 / 08 00 00 00 / ff 01 00 00 / 08 00 00 00 / 5b 00 00 00```

Which is interpreted as:

```c
setDamageParam(((global)int *)giVar511, ((global)int *)giVar91)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915a24(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar2 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar2,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if ((iVar3 != 0) && (*piVar1 != -1)) {
      iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
      if (iVar4 == 0) {
        iVar4 = 0;
      }
      if (iVar4 != 0) {
        (**(code **)(*(int *)(iVar4 + 4) + 0x9c))(iVar4,iVar3);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

