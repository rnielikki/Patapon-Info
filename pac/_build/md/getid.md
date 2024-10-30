# getId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 20 05 00`
- **Assembly Address in Memory** : `0x89b0f6c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 20 05 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getId((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b0f6c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if (*(int *)(param_1 + 0x14) != 0) {
    uVar2 = FUN_0898e324();
    *puVar1 = uVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

