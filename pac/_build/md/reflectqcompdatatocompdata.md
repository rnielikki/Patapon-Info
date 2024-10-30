# reflectQCompDataToCompData

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `reflectQCompDataToCompData`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 17 00`
- **Assembly Address in Memory** : `0x8b4f0a8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 1c 17 00 / 04 00 00 00 / 41 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
reflectQCompDataToCompData((int *)iVar65, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4f0a8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  undefined4 uVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar6 = *puVar1;
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar5 = *piVar2;
  iVar3 = FUN_Azito__08b5a618(*(undefined4 *)
                               (*(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30)
                                        + 0x14) + 0x38),2,uVar6,1);
  if (iVar3 != 0) {
    uVar6 = Save::Get_Save_BaseAddr(1);
    iVar4 = Save::Get_BaseAddr__0x78(uVar6,1);
    if (iVar5 == 0) {
      iVar5 = *(int *)(iVar4 + 0x44) + 2000;
    }
    else {
      iVar5 = *(int *)(iVar4 + 0x44) + 0x788;
    }
    FUN_08a15674(iVar5,*(undefined4 *)(iVar3 + 0xb8));
    if (-1 < *(int *)(iVar3 + 0xbc)) {
      FUN_08a15550(iVar5,*(int *)(iVar3 + 0xbc),*(undefined4 *)(iVar3 + 0xc0));
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

