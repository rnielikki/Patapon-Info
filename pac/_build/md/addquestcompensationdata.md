# addQuestCompensationData

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `addQuestCompensationData`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 19 00`
- **Assembly Address in Memory** : `0x894af38`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 0a 19 00 / 02 00 00 00 / ff ff ff ff / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
addQuestCompensationData((int)-1, (int)0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894af38(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  int iVar5;
  undefined4 uVar6;
  int iVar7;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar7 = *piVar1;
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar6 = *puVar2;
  piVar1 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar3 = *piVar1;
  uVar4 = Save::Get_Save_BaseAddr(1);
  iVar5 = Save::Get_BaseAddr__0x78(uVar4,1);
  if (iVar3 == 0) {
    iVar3 = *(int *)(iVar5 + 0x44) + 2000;
  }
  else {
    iVar3 = *(int *)(iVar5 + 0x44) + 0x788;
  }
  if (iVar7 == -1) {
    FUN_08a15500(iVar3);
  }
  else if (iVar7 == -2) {
    FUN_08a15674(iVar3,uVar6);
  }
  else {
    FUN_08a15550(iVar3,iVar7,uVar6);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

