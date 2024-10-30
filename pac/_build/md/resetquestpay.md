# resetQuestPay

Resets all quest *finishing* reward ([setQuestPayExp](./setquestpayexp.md), [setQuestPayItem](./setquestpayitem.md))

## Code Information

- **Name**: `resetQuestPay`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 d4 00`
- **Assembly Address in Memory** : `0x8925f18`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 d4 00```

Which is interpreted as:

```c
resetQuestPay()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08925f18(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = Get_Some_Flag(1);
  iVar1 = *(int *)(iVar1 + 0x44);
  FUN_08a15500(iVar1 + 0x788);
  FUN_08a15500(iVar1 + 2000);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

