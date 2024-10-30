# resultGetPhase

Gets current phase of the step when the mission is ended. The mission end status can be anything - sucess, failure or accession.

## Code Information

- **Name**: `resultGetPhase`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 eb 00`
- **Assembly Address in Memory** : `0x8926a00`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the result phase.

|ID|Meaning|
|1|Mission status determined|
|3|Decided what to do, performing animation|
|4|After headline (Quest complete/Defeat etc) message appeared|
|5|Chest box scene|
|6|Going to result screen / Next Floor / Going to hideout|

## Example

Here is one example in hex:

```25 16 eb 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
resultGetPhase((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08926a00(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x3c);
  *puVar1 = 0;
  if (iVar3 != 0) {
    uVar2 = (**(code **)(*(int *)(iVar3 + 4) + 0x44))();
    *puVar1 = uVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

