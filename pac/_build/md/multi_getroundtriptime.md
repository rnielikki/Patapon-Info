# multi_getRoundTripTime

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `multi_getRoundTripTime`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 35 00`
- **Assembly Address in Memory** : `0x894cb08`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894cb08(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar3 = Save::Get_Save_BaseAddr(1);
  iVar4 = Save::Get_BaseAddr__0x78(uVar3,1);
  iVar5 = *(int *)(iVar4 + 100);
  iVar4 = Is_Multi(iVar5);
  if (iVar4 == 0) {
    *puVar2 = 0;
  }
  else {
    uVar3 = FUN_089d14e0(*(undefined4 *)(iVar5 + 0x18c),*puVar1);
    *puVar2 = uVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

