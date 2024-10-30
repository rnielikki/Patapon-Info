# getSymbolMarkId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getSymbolMarkId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 df 00`
- **Assembly Address in Memory** : `0x892652c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 df 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getSymbolMarkId((int *)iVar1, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892652c(undefined4 param_1,undefined4 param_2)

{
  bool bVar1;
  undefined4 *puVar2;
  int *piVar3;
  int iVar4;
  int iVar5;
  int iVar6;
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar6 = *piVar3;
  *puVar2 = 0xffffffff;
  iVar4 = Get_Some_Flag(1);
  iVar4 = *(int *)(iVar4 + 0x44);
  if (*(char *)(iVar4 + 0x24b4) == '\0') {
    if (iVar6 == 0) {
      iVar5 = Save::Get_Save_BaseAddr(1);
      iVar5 = return__0x1c(*(undefined4 *)(iVar5 + 0x50));
      *puVar2 = *(undefined4 *)(iVar5 + 0x2187c);
    }
  }
  else {
    iVar5 = FUN_089880b8(iVar4 + 0x850,iVar6);
    *puVar2 = *(undefined4 *)(iVar5 + 4);
  }
  if (iVar6 == 1) {
    bVar1 = true;
    if ((*(char *)(iVar4 + 0x24b4) != '\0') && (*(char *)(iVar4 + 0x81c) != '\0')) {
      bVar1 = false;
    }
    if (bVar1) {
      *puVar2 = 0x34;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

