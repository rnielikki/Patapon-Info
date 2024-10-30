# resetQuestParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `resetQuestParam`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 16 00`
- **Assembly Address in Memory** : `0x8b4ee90`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(Int/Float)Var2` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4ee90(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  float *pfVar3;
  uint uVar4;
  int iVar5;
  int iVar6;
  float fVar7;
  int iVar8;
  undefined4 uVar9;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar9 = *puVar1;
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar8 = *piVar2;
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  uVar4 = Pac_Get_ParamType(param_2,2);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (iVar5 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30) + 0x14),
      iVar5 != 0)) &&
     (iVar5 = FUN_Azito__08b5a618(*(undefined4 *)(iVar5 + 0x38),2,uVar9,1), iVar5 != 0)) {
    iVar6 = Save::Get_Save_BaseAddr(1);
    if (iVar8 == 4) {
      if ((uVar4 & 0x70) == 0) {
        fVar7 = *pfVar3;
      }
      else {
        fVar7 = (float)(int)*pfVar3;
      }
      *(float *)(iVar5 + 0xc0) = fVar7;
    }
    else if (iVar8 == 3) {
      if ((uVar4 & 0x70) == 0) {
        fVar7 = *pfVar3;
      }
      else {
        fVar7 = (float)(int)*pfVar3;
      }
      *(float *)(iVar5 + 0xbc) = fVar7;
    }
    else if (iVar8 == 2) {
      if ((uVar4 & 0x70) == 0) {
        fVar7 = *pfVar3;
      }
      else {
        fVar7 = (float)(int)*pfVar3;
      }
      *(float *)(iVar5 + 0xb8) = fVar7;
    }
    else if (iVar8 == 1) {
      if ((uVar4 & 0x70) == 0) {
        fVar7 = *pfVar3;
      }
      else {
        fVar7 = (float)(int)*pfVar3;
      }
      uVar9 = FUN_Azito__08b50680(param_1);
      uVar9 = Message::Get_Message(iVar6 + 0x98,uVar9,fVar7);
      *(undefined4 *)(iVar5 + 0xb4) = uVar9;
    }
    else if (iVar8 == 0) {
      if ((uVar4 & 0x70) == 0) {
        fVar7 = *pfVar3;
      }
      else {
        fVar7 = (float)(int)*pfVar3;
      }
      uVar9 = FUN_Azito__08b50680(param_1);
      uVar9 = Message::Get_Message(iVar6 + 0x98,uVar9,fVar7);
      *(undefined4 *)(iVar5 + 0xb0) = uVar9;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

