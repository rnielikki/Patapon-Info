# getBossInfo2

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getBossInfo2`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 11 00`
- **Assembly Address in Memory** : `0x89b24e8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*
- `(Undefined)Var3` *(8 bytes)*
- `(Undefined)Var4` *(8 bytes)*
- `(Undefined)Var5` *(8 bytes)*
- `(undefined4)Var6` *(8 bytes)*
- `(Undefined)Var7` *(8 bytes)*
- `(Undefined)Var8` *(8 bytes)*
- `(Undefined)Var9` *(8 bytes)*
- `(Undefined)Var10` *(8 bytes)*
- `(Undefined)Var11` *(8 bytes)*
- `(Undefined)Var12` *(8 bytes)*
- `(Undefined)Var13` *(8 bytes)*
- `(undefined4)Var14` *(8 bytes)*
- `(Undefined)Var15` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b24e8(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined4 uVar6;
  undefined4 *puVar7;
  undefined4 uVar8;
  undefined4 uVar9;
  undefined4 uVar10;
  undefined4 uVar11;
  undefined4 uVar12;
  undefined4 uVar13;
  undefined4 uVar14;
  undefined4 *puVar15;
  undefined4 uVar16;
  int iVar17;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_Param(param_2,1,1,4);
  uVar3 = Pac_Get_Param(param_2,2,1,4);
  uVar4 = Pac_Get_Param(param_2,3,1,4);
  uVar5 = Pac_Get_Param(param_2,4,1,4);
  uVar6 = Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  uVar8 = Pac_Get_Param(param_2,7,1,4);
  uVar9 = Pac_Get_Param(param_2,8,1,4);
  uVar10 = Pac_Get_Param(param_2,9,1,4);
  uVar11 = Pac_Get_Param(param_2,10,1,4);
  uVar12 = Pac_Get_Param(param_2,0xb,1,4);
  uVar13 = Pac_Get_Param(param_2,0xc,1,4);
  uVar14 = Pac_Get_Param(param_2,0xd,1,4);
  puVar15 = (undefined4 *)Pac_Get_Param(param_2,0xe,1,4);
  uVar16 = Pac_Get_Param(param_2,0xf,1,4);
  iVar17 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar17 != 0) {
    FUN_08977210(iVar17,uVar2,uVar3,uVar4,uVar5,uVar6,*puVar7,uVar8,uVar9,uVar10,uVar11,uVar12,
                 uVar13,uVar14,*puVar15,uVar16);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

