# setGroundOffset

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setGroundOffset`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ae 00`
- **Assembly Address in Memory** : `0x89233f4`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 ae 00 / 10 00 00 00 / 00 00 00 c2```

Which is interpreted as:

```c
setGroundOffset((float)-32)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089233f4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_0890fa74(*puVar1,*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xd8));
    *(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x118) + 0x40) = *puVar1;
    *(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x128) + 0x24) = *puVar1;
    iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x138);
    if (iVar2 != 0) {
      *(undefined4 *)(iVar2 + 0x24) = *puVar1;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

