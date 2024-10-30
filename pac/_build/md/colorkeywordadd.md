# colorKeywordAdd

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `colorKeywordAdd`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 0b 00`
- **Assembly Address in Memory** : `0x892d588`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*
- `(int)Var5` *(4 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892d588(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int *piVar6;
  int iVar7;
  undefined4 uVar8;
  int iVar9;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,0,4);
  iVar9 = *piVar6;
  iVar7 = FUN_0883bc1c(param_2);
  Message::Write_Value_Final(param_1 + 0x34,0x200,iVar7 + iVar9);
  uVar8 = FUN_08871508();
  iVar7 = FUN_088715ac(uVar8);
  FUN_08992bcc(iVar7 + 0x34528,*puVar1,*puVar2,*puVar3,*puVar4,*puVar5,param_1 + 0x34);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

