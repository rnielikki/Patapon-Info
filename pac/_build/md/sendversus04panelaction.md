# sendVersus04PanelAction

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendVersus04PanelAction`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 f9 00`
- **Assembly Address in Memory** : `0x8924b98`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*
- `(undefined4)Var5` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924b98(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  int iVar7;
  undefined local_14;
  undefined local_13;
  undefined2 local_12;
  undefined2 local_10;
  undefined2 local_e;
  undefined local_c;
  undefined local_b;
  undefined2 local_a;
  undefined local_8;
  undefined local_7;
  undefined2 local_6;
  undefined2 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  iVar7 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if ((iVar7 != 0) && (iVar7 = *(int *)(iVar7 + 0x68), iVar7 != 0)) {
    local_14 = 0x12;
    local_13 = 0;
    local_12 = 0;
    local_10 = 0;
    local_e = 0x10cd;
    local_b = (undefined)*puVar1;
    local_a = (undefined2)*puVar2;
    local_8 = (undefined)*puVar3;
    local_7 = (undefined)*puVar4;
    local_6 = (undefined2)*puVar5;
    local_4 = (undefined2)*puVar6;
    local_c = 0;
    FUN_089f0070(iVar7,&local_14);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

