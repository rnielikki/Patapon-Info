# setVectorFluctuationAngle

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setVectorFluctuationAngle`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 15 00`
- **Assembly Address in Memory** : `0x89121d8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 15 00 / 04 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 68 41 / 10 00 00 00 / 00 00 a0 40```

Which is interpreted as:

```c
setVectorFluctuationAngle((int *)iVar0, (float)0, (float)14.5, (float)5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089121d8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  if (param_1 == 0) {
    iVar5 = 0;
  }
  else {
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    else {
      iVar5 = *(int *)(iVar5 + 200);
      if (iVar5 == 0) {
        iVar5 = 0;
      }
    }
  }
  if (iVar5 != 0) {
    local_c = *puVar3;
    local_10 = *puVar2;
    local_8 = 0;
    local_4 = 0;
    FUN_0888e2bc(*puVar4,iVar5,&local_10,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

