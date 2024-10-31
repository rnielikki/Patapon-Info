# getLevelUpScriptParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getLevelUpScriptParam`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 1b 00`
- **Assembly Address in Memory** : `0x8b4f3b0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4f3b0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 uVar5;
  int iVar6;
  undefined4 uVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar7 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    uVar5 = Save::Get_Save_BaseAddr(1);
    iVar6 = Save::Get_BaseAddr__0x78(uVar5,1);
    uVar5 = Param::Get_Data_Addr(*(undefined4 *)(iVar6 + 0xa4),10);
    iVar6 = Param::Get_Line_Addr(uVar5,0,uVar7,1);
    *puVar1 = *(undefined4 *)(iVar6 + 0x40);
    *puVar2 = *(undefined4 *)(iVar6 + 0x44);
    *puVar3 = *(undefined4 *)(iVar6 + 0x48);
    *puVar4 = *(undefined4 *)(iVar6 + 0x4c);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

