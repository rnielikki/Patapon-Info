# multi_waitGoAhead2

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `multi_waitGoAhead2`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 b3 00`
- **Assembly Address in Memory** : `0x891b05c`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
//Jumps to 0x0891af04, setting 3rd parameter to 2
void FUN_0891af04(int param_1,undefined4 param_2,undefined4 param_3)

{
  undefined4 uVar1;
  int iVar2;
  int iVar3;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  iVar3 = *(int *)(iVar2 + 100);
  iVar2 = Is_Multi(iVar3);
  if (iVar2 != 0) {
    iVar2 = *(int *)(param_1 + 0x10);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    if (*(int *)(iVar2 + 0x44) != 0xd) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    if (*(char *)(iVar3 + 0xa6) != '\0') {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  iVar2 = Get_Execution_Pause_Phase(param_2);
  if (iVar2 == 0) {
    iVar2 = Is_Multi(iVar3);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    Pause_Execution(param_2,1);
    iVar2 = FUN_08987190(iVar3,param_3);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  iVar2 = FUN_089872b0(iVar3,param_3);
  if (iVar2 != 0) {
    Set_Execution_Pause_Phase(iVar3,param_3);
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

