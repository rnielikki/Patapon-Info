# recoveryPlayerTroopHP

Fully recovers every unit in the player team.

## Code Information

- **Name**: `recoveryPlayerTroopHP`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 4c 00`
- **Assembly Address in Memory** : `0x891e6ac`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 4c 00```

Which is interpreted as:

```c
recoveryPlayerTroopHP()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e6ac(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = *(int *)(param_1 + 0x10);
  if (iVar1 == 0) {
    iVar1 = 0;
  }
  else {
    if (iVar1 == 0) {
      iVar1 = 0;
    }
    iVar1 = *(int *)(iVar1 + 0xf8);
    if (iVar1 == 0) {
      iVar1 = 0;
    }
  }
  if ((iVar1 != 0) && (iVar1 = FUN_088a8650(iVar1,0), iVar1 != 0)) {
    Damage::Heal::HealAll(0x3f800000,iVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

