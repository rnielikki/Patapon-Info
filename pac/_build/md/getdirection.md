# getDirection

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getDirection`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 5d 00`
- **Assembly Address in Memory** : `0x8917aac`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 5d 00 / 04 00 00 00 / 0a 00 00 00 / 20 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getDirection((int *)iVar10, (float *)fVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917aac(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0x3f800000;
  if (param_1 == 0) {
    iVar3 = 0;
  }
  else {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = *(int *)(iVar3 + 200);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    *puVar2 = *(undefined4 *)(iVar3 + 0x94);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

