# addTroop

Adds sides for the team. For PVE, 0 is player side. Hatapon is unaffected to this. For VS, it is blue team (0) and red team (1).

In normal PVE field, local int 34 tends to be player troop.

## Code Information

- **Name**: `addTroop`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 1f 00`
- **Assembly Address in Memory** : `0x891b8dc`

## Parameters

- `(int *)troop_handle` *(8 bytes)* : Variable to *store* the troop handle.
- `(int)team_side` *(8 bytes)* : 0 is player side, 1 is enemy side.

## Example

Here is one example in hex:

```25 16 1f 00 / 08 00 00 00 / 68 00 00 00 / 08 00 00 00 / 67 00 00 00```

Which is interpreted as:

```c
addTroop(((global)int *)giVar104, ((global)int *)giVar103)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b8dc(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *piVar1 = -1;
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
  if ((iVar3 != 0) && (iVar3 = FUN_088a858c(iVar3,*puVar2), iVar3 != 0)) {
    *piVar1 = (int)*(short *)(iVar3 + 0x78);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

