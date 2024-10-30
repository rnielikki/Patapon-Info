# getActReqActCount

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getActReqActCount`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 16 00`
- **Assembly Address in Memory** : `0x8b5da88`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(char)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 1f 16 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 05 00 00 00```

Which is interpreted as:

```c
getActReqActCount((int *)iVar1, (int)0, (int *)iVar5)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5da88(int param_1,undefined4 param_2)

{
  int *piVar1;
  char *pcVar2;
  int *piVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  pcVar2 = (char *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (*piVar1 == -1) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8));
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    iVar4 = FUN_Mission__08b58d60(iVar4,(int)*pcVar2);
    *piVar3 = (int)*(char *)(iVar4 + 9);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

