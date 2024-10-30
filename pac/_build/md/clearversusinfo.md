# clearVersusInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `clearVersusInfo`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 2d 00`
- **Assembly Address in Memory** : `0x8b50068`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 1c 2d 00```

Which is interpreted as:

```c
clearVersusInfo()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b50068(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  int iVar3;
  
  iVar3 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0xcdd4);
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  iVar2 = *(int *)(iVar2 + 0x44);
  if (iVar2 != 0) {
    FUN_0898b1a0(iVar2 + 0x3c);
  }
  uVar1 = Save::Get_Save_BaseAddr(1);
  Save::Get_BaseAddr__0x78(uVar1,1);
  if (iVar2 != -0x528) {
    *(undefined *)(iVar2 + 0x81c) = 0;
  }
  if (iVar3 != 0) {
    *(undefined *)(iVar3 + 0x150) = 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

