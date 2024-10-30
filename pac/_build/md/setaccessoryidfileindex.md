# setAccessoryIdFileIndex

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setAccessoryIdFileIndex`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 14 00`
- **Assembly Address in Memory** : `0x894a7dc`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 14 00 / 02 00 00 00 / 03 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setAccessoryIdFileIndex((int)3, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894a7dc(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar4 = *puVar1;
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar3 = *puVar1;
  Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_Save_BaseAddr(1);
  iVar2 = return__0x1c(*(undefined4 *)(iVar2 + 0x50));
  Graphic::Character::Scarf_Color(iVar2 + 0xed80,uVar4,uVar3);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

