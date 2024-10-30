# addSquad

Adds squad to a troop. Shouldn't be used much except adding player team.

For adding enemy units, consider [reqActor](./guide/how-to-create-an-enemy-target.md) with [getSquadHandle](./getsquadhandle.md).

## Code Information

- **Name**: `addSquad`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 22 00`
- **Assembly Address in Memory** : `0x891bacc`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the squad handle.
- `(int)troop_handle` *(8 bytes)* : The [troop handle](./addtroop.md).

## Example

Here is one example in hex:

```25 16 22 00 / 04 00 00 00 / 35 00 00 00 / 04 00 00 00 / 34 00 00 00```

Which is interpreted as:

```c
addSquad((int *)iVar53, (int *)iVar52)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891bacc(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1);
  if (((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 2)) &&
     (iVar3 = FUN_088deaa0(iVar3), iVar3 != 0)) {
    *piVar1 = (int)*(short *)(iVar3 + 0x78);
    FUN_088c45f0(iVar3,0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

