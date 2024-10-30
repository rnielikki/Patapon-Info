# setDisableSelectAction

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setDisableSelectAction`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 3a 00`
- **Assembly Address in Memory** : `0x89b4628`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 3a 00 / 02 00 00 00 / 64 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setDisableSelectAction((int)100, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b4628(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = Get_Squad_From_ReqUniqueID(*(undefined4 *)(iVar3 + 0xf8),*puVar1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = FUN_0896d6e0(*(undefined4 *)(iVar3 + 0x708));
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    *(bool *)(iVar3 + 0x59d) = *piVar2 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

