# effectsetCommonStatusParam

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `effectsetCommonStatusParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 0a 00`
- **Assembly Address in Memory** : `0x89418d8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 0a 00 / 04 00 00 00 / 0a 00 00 00 / 02 00 00 00 / 35 00 00 00```

Which is interpreted as:

```c
effectsetCommonStatusParam((int *)iVar10, (int)53)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089418d8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  undefined4 uVar4;
  int iVar5;
  int iVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar6 = *piVar2;
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
  }
  if ((iVar3 != 0) && (iVar6 != -1)) {
    Save::Get_Save_BaseAddr(1);
    uVar4 = Save::Get_Save_BaseAddr(1);
    iVar5 = Save::Get_BaseAddr__0x78(uVar4,1);
    uVar4 = Param::Get_Data_Addr(*(undefined4 *)(iVar5 + 0xa4),2);
    iVar6 = Param::Get_Line_Addr(uVar4,1,iVar6,1);
    if (iVar6 != 0) {
      FUN_088d2b38(iVar3,iVar6);
      (**(code **)(*(int *)(iVar3 + 4) + 0x114))(iVar3);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

