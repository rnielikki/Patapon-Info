# isHero

Checks if the given unit is hero or not.

## Code Information

- **Name**: `isHero`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 56 00`
- **Assembly Address in Memory** : `0x891741c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Unit handle, obtained from [getUnitHandle](./getunithandle.md).
- `(uint *)destination` *(8 bytes)* : Destination to *store* if it is hero or not. **The value is either `0` or `1`**.

## Example

Here is one example in hex:

```25 17 56 00 / 08 00 00 00 / 6e 01 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isHero(((global)int *)giVar366, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891741c(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    *puVar2 = 0;
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if ((iVar3 == 0) || (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 != 9)) {
      if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
        iVar3 = Is_HeroUnit(iVar3);
        *puVar2 = (uint)(iVar3 != 0);
      }
    }
    else {
      *puVar2 = (uint)*(byte *)(iVar3 + 0xa04);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

