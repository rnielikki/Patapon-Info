# getActive

Checks if a target with given handle is active. [setActive](./setactive.md) decides if the target is active.

## Code Information

- **Name**: `getActive`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 07 00`
- **Assembly Address in Memory** : `0x891111c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [Handle](./guide/how-to-get-a-handle.md).
- `(bool *)is_active` *(8 bytes)* : Variable to *store* the result. 1 if the target is active, otherwise 0.

## Example

Here is one example in hex:

```25 17 07 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getActive((int *)iVar0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891111c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  *puVar2 = 0;
  if (iVar3 != 0) {
    *puVar2 = (uint)*(byte *)(iVar3 + 0x9c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

