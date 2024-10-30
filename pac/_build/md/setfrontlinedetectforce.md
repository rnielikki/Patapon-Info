# setFrontLineDetectForce

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setFrontLineDetectForce`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 de 00`
- **Assembly Address in Memory** : `0x8923824`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 de 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setFrontLineDetectForce((int)0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08923824(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 != 0) {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      if (iVar3 == 0) {
        iVar3 = 0;
      }
      iVar3 = *(int *)(iVar3 + 0xf8);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
    iVar3 = FUN_088a8650(iVar3,*puVar1);
    *(bool *)(iVar3 + 0x28e) = *piVar2 != 0;
    *(bool *)(iVar3 + 0x28f) = *piVar2 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

