# multi_isWaitSync

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `multi_isWaitSync`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 b7 00`
- **Assembly Address in Memory** : `0x891b3e0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 b7 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
multi_isWaitSync((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b3e0(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Save::Get_Save_BaseAddr(1);
  iVar3 = Save::Get_BaseAddr__0x78(uVar2,1);
  iVar4 = *(int *)(iVar3 + 100);
  *puVar1 = 0;
  iVar3 = Is_Multi(iVar4);
  if (iVar3 == 0) {
    PAC::PAC_setCmdId(param_2,0);
  }
  else if (*(char *)(iVar4 + 0xa4) == '\x01') {
    *puVar1 = 1;
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    iVar3 = FUN_08987188(iVar4);
    if (iVar3 == 0) {
      *puVar1 = 1;
      PAC::PAC_setCmdId(param_2,0);
    }
    else {
      iVar3 = FUN_08987300(iVar4);
      if (iVar3 == 0) {
        *puVar1 = 1;
        PAC::PAC_setCmdId(param_2,0);
      }
      else {
        PAC::PAC_setCmdId(param_2,0);
      }
    }
  }
  return;
}
```

