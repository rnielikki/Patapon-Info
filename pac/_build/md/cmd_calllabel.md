# cmd_callLabel

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `cmd_callLabel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 3f 00`
- **Assembly Address in Memory** : `0x883ac38`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 00 3f 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cmd_callLabel((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883ac38(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  Set_ReturnContext(param_2);
  PAC::Cmd_Jump_Or_Call(param_2,*puVar1,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

