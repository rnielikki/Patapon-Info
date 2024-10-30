# sendPlayMotion

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `sendPlayMotion`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 07 01`
- **Assembly Address in Memory** : `0x89285ec`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(char)Var1` *(8 bytes)*
- `(undefined)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 07 01 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 03 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
sendPlayMotion((int *)iVar0, (int)3, (int *)iVar1, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089285ec(int param_1,undefined4 param_2)

{
  char cVar1;
  undefined4 *puVar2;
  char *pcVar3;
  undefined *puVar4;
  undefined4 *puVar5;
  int iVar6;
  int iVar7;
  undefined4 uVar8;
  int iVar9;
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  pcVar3 = (char *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = (undefined *)Pac_Get_Param(param_2,2,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  *puVar5 = 0;
  iVar6 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1);
  if (((iVar6 != 0) && (iVar7 = (**(code **)(*(int *)(iVar6 + 4) + 0x34))(iVar6), iVar7 == 10)) &&
     (iVar6 = *(int *)(iVar6 + 0x194), iVar6 != 0)) {
    uVar8 = Save::Get_Save_BaseAddr(1);
    iVar7 = Save::Get_BaseAddr__0x78(uVar8,1);
    uVar8 = *(undefined4 *)(iVar7 + 100);
    iVar9 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
    iVar7 = Is_Multi(uVar8);
    if (iVar7 != 0) {
      iVar7 = Is_Multi(uVar8);
      if (iVar7 == 0) {
        cVar1 = '\0';
      }
      else {
        cVar1 = FUN_08986d3c(uVar8);
      }
      if (cVar1 != '\0') {
        FUN_089c4c08(*(undefined4 *)(iVar9 + 0x18),iVar6,5,(int)*pcVar3,0,*puVar4);
        *puVar5 = 1;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

