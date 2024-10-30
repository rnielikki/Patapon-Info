# receiveVersus04RequestWave

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `receiveVersus04RequestWave`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1e 01`
- **Assembly Address in Memory** : `0x892a18c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a18c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  *puVar1 = 0xffffffff;
  if (iVar2 != 0) {
    *puVar1 = *(undefined4 *)(*(int *)(iVar2 + 0x68) + 0xb4);
    *(undefined4 *)(*(int *)(iVar2 + 0x68) + 0xb4) = 0xffffffff;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

