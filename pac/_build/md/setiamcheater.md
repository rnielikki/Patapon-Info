# setIamCheater

Makes character name red in multi, if the character is *diagnosed as* cheater.

> [!WARNING]
> **There are many false positives**! DO NOT suspect people based on this.

Practically, those are few reasons why this is called:

- Equpiment level is higher than class level (Best observed in DoI)
- **Random Disconnection**
- **Even baby save can call this randomly**.

## Code Information

- **Name**: `setIamCheater`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 36 00`
- **Assembly Address in Memory** : `0x8b508b0`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 1c 36 00```

Which is interpreted as:

```c
setIamCheater()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b508b0(int param_1,undefined4 param_2)

{
  if (*(int *)(param_1 + 0x10) != 0) {
    Set_Redname_Flag(*(int *)(param_1 + 0x10),1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

