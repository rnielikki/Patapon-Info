# recoveryPlayerTroopHPRatio

Recovers certain percentage of stamina of every unit in the player team.

## Code Information

- **Name**: `recoveryPlayerTroopHPRatio`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 4d 00`
- **Assembly Address in Memory** : `0x891e728`

## Parameters

- `(float)heal_ratio` *(8 bytes)* : Amount to recover as %. expected *0~1*.

## Example

Here is one example in hex:

```25 16 4d 00 / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
recoveryPlayerTroopHPRatio((float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e728(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0xf8);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if ((iVar2 != 0) && (iVar2 = FUN_088a8650(iVar2,0), iVar2 != 0)) {
    Damage::Heal::HealAll(*puVar1,iVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

