# setMsgWndRender

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setMsgWndRender`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 a3 00`
- **Assembly Address in Memory** : `0x89229c4`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 a3 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setMsgWndRender((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089229c4(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0x178);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if (iVar2 != 0) {
    FUN_0893d52c(iVar2,*piVar1 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

