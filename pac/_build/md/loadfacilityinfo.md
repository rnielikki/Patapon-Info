# loadFacilityInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `loadFacilityInfo`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 22 00`
- **Assembly Address in Memory** : `0x8b4fb60`

## Parameters

This function is parameterless.


## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4fb60(int param_1,undefined4 param_2)

{
  int iVar1;
  int iVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  
  iVar1 = Save::Get_Save_BaseAddr(1);
  iVar1 = *(int *)(iVar1 + 0x50);
  iVar5 = iVar1 + 0x285a8;
  iVar4 = 0;
  iVar2 = 0;
  do {
    iVar3 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + iVar2 + 0x1e0);
    if ((iVar3 != 0) && (*(int *)(iVar3 + 0x148) != 0)) {
      FUN_Azito__08b4cf28(iVar5 + 0x1418);
      *(bool *)(iVar3 + 0x141) = *(char *)(iVar5 + 0x141d) != '\0';
      *(bool *)(iVar3 + 0x142) = *(char *)(iVar5 + 0x141e) != '\0';
      if (*(int *)(iVar1 + 0x29af8) == iVar4) {
        Azito::Select_Facility(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x1c4),iVar3);
        iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x1b4);
        if (iVar3 != 0) {
          FUN_Azito__08acdfa0(iVar3,iVar5 + 0x1428);
        }
      }
    }
    iVar4 = iVar4 + 1;
    iVar2 = iVar2 + 0x10;
    iVar5 = iVar5 + 0x18;
  } while (iVar4 < 0xd);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

