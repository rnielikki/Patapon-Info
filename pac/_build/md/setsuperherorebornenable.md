# setSuperHeroRebornEnable

Enable or disable reborn of specific hero or all heroes. Dungeon disables reborn with this.

## Code Information

- **Name**: `setSuperHeroRebornEnable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 54 00`
- **Assembly Address in Memory** : `0x891f2ac`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Handle of the *squad*. **-1 applies to every hero unit** (not enemy DH unit).
   - Handle ID is required for enemy DH unit.
- `(bool)enable_reborn` *(8 bytes)* : 0 to disable hero reborn, otherwise hero can be reborn after certain time.

## Example

Here is one example in hex:

```25 16 54 00 / 02 00 00 00 / ff ff ff ff / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setSuperHeroRebornEnable((int)-1, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891f2ac(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  int iVar4;
  undefined4 uVar5;
  int iVar6;
  uint uVar7;
  undefined4 ***pppuVar8;
  uint uVar9;
  undefined4 ****ppppuVar10;
  undefined4 **ppuVar11;
  int *local_1a4;
  int *local_1a0;
  undefined *local_19c;
  undefined auStack408 [388];
  undefined *local_14;
  undefined4 ****local_10;
  undefined4 ****local_c;
  int **local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 < 0) {
    iVar3 = *(int *)(param_1 + 0x10);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      if (iVar3 == 0) {
        iVar3 = 0;
      }
      iVar3 = *(int *)(iVar3 + 0xf8);
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
    if (iVar3 != 0) {
      iVar4 = 0;
      do {
        uVar5 = FUN_088a8650(iVar3,iVar4);
        local_19c = &DAT_08a840a0;
        local_14 = auStack408;
        piVar1 = (int *)(*(code *)PTR_FUN_08a840a8)(&local_1a4);
        local_1a4 = piVar1;
        iVar6 = (**(code **)(local_19c + 0xc))(&local_1a4);
        local_1a0 = piVar1 + (iVar6 + -1) * 3;
        piVar1[1] = (int)&local_1a4;
        *local_1a0 = (int)&local_1a4;
        uVar9 = 1;
        uVar7 = (**(code **)(local_19c + 0xc))(&local_1a4);
        if (1 < uVar7) {
          do {
            *piVar1 = (int)(piVar1 + 3);
            piVar1[4] = (int)piVar1;
            uVar9 = uVar9 + 1;
            uVar7 = (**(code **)(local_19c + 0xc))(&local_1a4);
            piVar1 = piVar1 + 3;
          } while (uVar9 < uVar7);
        }
        local_8 = &local_1a4;
        local_4 = 0;
        local_10 = &local_10;
        local_c = local_10;
        FUN_088dfd3c(uVar5,0xffffffff,&local_1a4);
        if ((undefined4 *****)local_10 != &local_10) {
          pppuVar8 = local_10[2];
          ppppuVar10 = local_10;
          while( true ) {
            ppuVar11 = pppuVar8[0x285];
            iVar6 = Character::Get_Unit_Type(ppuVar11);
            if (iVar6 == 2) {
              ppppuVar10 = (undefined4 ****)*ppppuVar10;
            }
            else {
              if (*piVar2 == 0) {
                FUN_088c54d8(ppuVar11,0);
              }
              else {
                FUN_088c54d8(ppuVar11,1);
              }
              ppppuVar10 = (undefined4 ****)*ppppuVar10;
            }
            if ((undefined4 *****)ppppuVar10 == &local_10) break;
            pppuVar8 = ppppuVar10[2];
          }
        }
        FUN_088de56c(&local_10,0);
        FUN_088de508(&local_1a4,0);
        iVar4 = iVar4 + 1;
      } while (iVar4 < 2);
    }
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar1,1);
    if (((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) &&
       (iVar3 != 0)) {
      if (*piVar2 == 0) {
        FUN_088c54d8(iVar3,0);
      }
      else {
        FUN_088c54d8(iVar3,1);
      }
    }
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

