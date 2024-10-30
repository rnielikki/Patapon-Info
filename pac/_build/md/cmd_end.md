# cmd_end

Terminates the pac instruction sequence, without performing any next instruction (next line, jump, call etc).

## Code Information

- **Name**: `cmd_end`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 01 00`
- **Assembly Address in Memory** : `0x88378a8`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 00 01 00```

Which is interpreted as:

```c
cmd_end()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_088378a8(int *param_1,undefined4 param_2)

{
  int iVar1;
  int iVar2;
  
  iVar1 = FUN_0883ca60(param_2);
  iVar2 = FUN_0883be98(param_2);
  if (iVar2 == 0) {
    if (iVar1 == 0) {
      FUN_0883bc28(param_2,0);
      (**(code **)(*param_1 + 0x1c))(param_1,param_2);
      PAC::PAC_setCmdId(param_2,0);
    }
    else {
      FUN_0883ca24(param_2);
    }
  }
  else {
    FUN_0883be3c(param_2);
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

