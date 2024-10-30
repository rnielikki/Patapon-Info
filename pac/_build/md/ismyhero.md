# isMyHero

Checks if the given unit is current player's hero or not.

The value is `false` if the unit isn't players', or if the unit is not a hero.

## Code Information

- **Name**: `isMyHero`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 68 00`
- **Assembly Address in Memory** : `0x89184b4`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(uint *)destination` *(8 bytes)* : Destination to *store* if it is current player's hero or not. **The value is either `0` or `1`**.

## Example

Here is one example in hex:

```25 17 68 00 / 04 00 00 00 / 41 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isMyHero((int *)iVar65, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089184b4(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  uint uVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 != 0) {
      iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
      iVar5 = iVar3;
      if ((iVar4 != 9) &&
         (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar5 = 0, iVar4 == 3)) {
        iVar5 = Is_HeroUnit(iVar3);
      }
      if ((iVar5 != 0) && (*(char *)(iVar5 + 0xa04) != '\0')) {
        uVar6 = (**(code **)(*(int *)(iVar5 + 4) + 0x10c))(iVar5);
        *puVar2 = uVar6 & 0xff;
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

