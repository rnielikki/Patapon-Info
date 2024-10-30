# setAttackSoundResponse

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setAttackSoundResponse`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 29 00`
- **Assembly Address in Memory** : `0x891c00c`

## Parameters

- `(int)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 29 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setAttackSoundResponse((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891c00c(int param_1,undefined4 param_2)

{
  int *piVar1;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  FUN_088a9edc(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xf8),*piVar1 != 0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

