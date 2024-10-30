# cmd_memcpy

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_memcpy`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 43 00`
- **Assembly Address in Memory** : `0x883ade4`

## Parameters

- `(Undefined)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883ade4(undefined4 param_1,undefined4 param_2)

{
  undefined4 uVar1;
  undefined4 uVar2;
  int *piVar3;
  
  uVar1 = Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  syscall::Kernel::sceKernelMemCpy(uVar1,uVar2,*piVar3 << 2);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

