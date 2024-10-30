# setMultimapViewState

**Only for VS mission**, displays or hides the top UI on the VS map.

## Code Information

- **Name**: `setMultimapViewState`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 d9 00`
- **Assembly Address in Memory** : `0x8926294`

## Parameters

- `(bool)show_vs_map` *(8 bytes)* : Shows the top UI on the VS map.
- `(bool)bVar1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 d9 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setMultimapViewState((int)0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926294(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c);
  iVar4 = *(int *)(iVar3 + 0x54);
  iVar3 = *(int *)(iVar3 + 0x58);
  if (iVar4 != 0) {
    if (*piVar1 == 0) {
      *(uint *)(iVar4 + 0xbc) = *(uint *)(iVar4 + 0xbc) | *puVar2;
    }
    else {
      *(uint *)(iVar4 + 0xbc) = *(uint *)(iVar4 + 0xbc) & ~(uint)(*piVar1 != 0);
    }
  }
  if (iVar3 != 0) {
    if (*piVar1 == 0) {
      *(uint *)(iVar3 + 0x400) = *(uint *)(iVar3 + 0x400) | *puVar2;
    }
    else {
      *(uint *)(iVar3 + 0x400) = *(uint *)(iVar3 + 0x400) & ~*puVar2;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

