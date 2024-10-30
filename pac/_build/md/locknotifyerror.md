# lockNotifyError

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `lockNotifyError`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1f 01`
- **Assembly Address in Memory** : `0x892a200`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 1f 01 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
lockNotifyError((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a200(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 uVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Debug::Get_Log_Setting(1);
  FUN_08957d68(uVar2,*piVar1 != 0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

