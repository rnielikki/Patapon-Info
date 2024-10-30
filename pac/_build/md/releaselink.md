# releaseLink

Detach an object from its parent node.

## Code Information

- **Name**: `releaseLink`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 1d 00`
- **Assembly Address in Memory** : `0x8912b2c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md) of the *attached object*.

## Example

Here is one example in hex:

```25 17 1d 00 / 04 00 00 00 / 0d 00 00 00```

Which is interpreted as:

```c
releaseLink((int *)iVar13)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912b2c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  if (iVar2 != 0) {
    FUN_0887ddd0(iVar2,1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

