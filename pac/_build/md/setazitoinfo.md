# setAzitoInfo

Sets certain hideout related information. The information depends on `info_type` parameter.

## Code Information

- **Name**: `setAzitoInfo`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 07 00`
- **Assembly Address in Memory** : `0x8b4d7e0`

## Parameters

- `(int)info_type` *(8 bytes)* : Type to get the info. It is limited to 0x1, 0x2, 0x3, 0x7, 0x8, 0x9, 0xA, 0x12.
- `(uint *)value` *(8 bytes)* : Value to set. Depends on the `info_type`, this can be either boolean or int.

For more information about `info_type`, check [getAzitoInfo](./getazitoinfo.md).

## Example

Here is one example in hex:

```25 1c 07 00 / 02 00 00 00 / 0a 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setAzitoInfo((int)10, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4d7e0(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  undefined4 uVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar4 = *piVar1;
  piVar1 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    iVar2 = Save::Get_Save_BaseAddr(1);
    return__0x1c(*(undefined4 *)(iVar2 + 0x50));
    Save::Get_Save_BaseAddr(1);
    uVar3 = Save::Get_Save_BaseAddr(1);
    iVar2 = Save::Get_BaseAddr__0x78(uVar3,1);
    if (iVar4 == 0x12) {
      *(bool *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x28) = *piVar1 != 0;
    }
    else if (iVar4 == 10) {
      *(bool *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x21) = *piVar1 != 0;
    }
    else if (iVar4 == 9) {
      iVar4 = FUN_Azito__08ad37f0(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x1c4));
      if (iVar4 != 0) {
        *(bool *)(iVar4 + 0x361) = *piVar1 != 0;
      }
    }
    else if (iVar4 == 8) {
      FUN_0884f334(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x14),*piVar1,3);
    }
    else if (iVar4 == 7) {
      FUN_Azito__08ad35f0(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x1c4),*piVar1);
    }
    else if (iVar4 == 3) {
      *(bool *)(*(int *)(*(int *)(param_1 + 0x10) + 0x1c4) + 0x20) = *piVar1 != 0;
    }
    else if (iVar4 == 2) {
      *(int *)(*(int *)(iVar2 + 0x44) + 0x550) = *piVar1;
    }
    else if (iVar4 == 1) {
      *(int *)(*(int *)(iVar2 + 0x44) + 0x534) = *piVar1;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

