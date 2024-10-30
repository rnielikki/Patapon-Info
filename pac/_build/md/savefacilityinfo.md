# saveFacilityInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `saveFacilityInfo`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 21 00`
- **Assembly Address in Memory** : `0x8b4fa60`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4fa60(int param_1,undefined4 param_2)

{
  int iVar1;
  int iVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  
  iVar1 = Save::Get_Save_BaseAddr(1);
  iVar1 = *(int *)(iVar1 + 0x50);
  iVar6 = iVar1 + 0x285a8;
  iVar5 = 0;
  iVar4 = 0;
  do {
    iVar3 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + iVar4 + 0x1e0);
    if (iVar3 != 0) {
      if (*(int *)(iVar3 + 0x148) == 0) {
        iVar2 = *(int *)(param_1 + 0x10);
      }
      else {
        FUN_Azito__08b4cdf0(iVar6 + 0x1418,iVar5);
        *(undefined *)(iVar6 + 0x141d) = *(undefined *)(iVar3 + 0x141);
        *(undefined *)(iVar6 + 0x141e) = *(undefined *)(iVar3 + 0x142);
        iVar2 = *(int *)(param_1 + 0x10);
      }
      if (*(int *)(*(int *)(iVar2 + 0x1c4) + 0x2b8) == iVar3) {
        *(int *)(iVar1 + 0x29af8) = iVar5;
      }
    }
    iVar5 = iVar5 + 1;
    iVar4 = iVar4 + 0x10;
    iVar6 = iVar6 + 0x18;
  } while (iVar5 < 0xd);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

