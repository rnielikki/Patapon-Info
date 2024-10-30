# setVersusStringTypeScore

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setVersusStringTypeScore`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 30 01`
- **Assembly Address in Memory** : `0x892737c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(uint)Var4` *(8 bytes)*
- `(int)Var5` *(8 bytes)*
- `(int)Var6` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892737c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  uint *puVar5;
  int *piVar6;
  int *piVar7;
  int iVar8;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (uint *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  piVar7 = (int *)Pac_Get_Param(param_2,6,1,4);
  if ((*(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x68) != 0) &&
     (iVar8 = func_0x08b36488(), iVar8 != 0)) {
    local_4 = *puVar4;
    local_8 = *puVar3;
    func_0x08b35780(iVar8,*puVar1,*puVar2,*piVar7 << 0x10 | *puVar5 | *piVar6 << 8 | 0xff000000);
    func_0x08b360d0(iVar8,&local_8);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

